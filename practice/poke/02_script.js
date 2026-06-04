console.log("script 확인");

const form = document.querySelector("#searchForm");
const result = document.querySelector("#searchResult");
const randomBtn = document.querySelector("#randomBtn");

form.addEventListener("submit", searchFormHandler);
if (randomBtn) {
  randomBtn.addEventListener("click", (event) => randomFusionHandler(event));
}

async function randomFusionHandler() {
  if (event) event.preventDefault();

  console.log("randomFusionHandler 시작");
  result.innerHTML = `<p style="text-align:center;">포켓몬들을 융합하는 중...</p>`;

  // 현재 포켓몬 수가 약 1015마리 정도 되므로 1~1015 사이의 숫자를 무작위로 2개 뽑습니다.
  const randomId1 = Math.floor(Math.random() * 1015) + 1;
  const randomId2 = Math.floor(Math.random() * 1015) + 1;

  while (randomId1 === randomId2) {
    console.log(`앗! 중복 발생. 다시 추첨합니다.`);
    return randomFusionHandler();
  }

  // 두 마리의 데이터를 동시에 가져옵니다.
  const pokeData1 = await getPokeData(String(randomId1));
  const pokeData2 = await getPokeData(String(randomId2));

  if (pokeData1 && pokeData2) {
    drawFusionPoke(pokeData1, pokeData2);
  } else {
    result.innerHTML = `<p style="text-align:center; color:red;">융합에 실패했습니다. 다시 시도해주세요.</p>`;
  }
}

// 🔥 4. 두 포켓몬을 합쳐서 그려주는 새로운 함수
function drawFusionPoke(data1, data2) {
  console.log("drawFusionPoke 실행", data1.koName, data2.koName);

  result.innerHTML = `
        <div style="text-align: center;">
            
            <div style="
                width: 96px; 
                height: 96px; 
                display: inline-block; 
                position: relative;
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 8px;
            ">
                <img src="${data1.sprites.front_default}" style="
                    position: absolute;
                    top: 0; left: 0; width: 96px; height: 96px;
                    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
                " />
                
                <img src="${data2.sprites.front_default}" style="
                    position: absolute;
                    top: 0; left: 0; width: 96px; height: 96px;
                    clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
                " />
            </div>

            <h4 style="margin-top: 10px;">${data1.koName} ❌ ${data2.koName}</h4>
            <p>번호조합 : ${data1.id}번 & ${data2.id}번</p>
            
            <p>${data1.koName} 울음소리</p>
            <audio src="${data1.cries.latest}" controls style="transform: scale(0.8);"></audio>
        </div>
    `;
}

async function searchFormHandler(event) {
  event.preventDefault();
  console.log("searchFormHandler 확인");

  //  .trim을 붙여줌
  const search = getFormData(event).get("search").trim();
  console.log("search", search);
  const pokeData = await getPokeData(search);
  console.log("pokeData", pokeData);

  //  한글 검색을 위한 if문
  if (pokeData) {
    drawPoke(pokeData);
  } else {
    result.innerHTML = `<p style="text-align:center; color:red;">포켓몬을 찾을 수 없습니다.</p>`;
  }

  function drawPoke(data) {
    console.log("drawPoke");
    console.log("result", result);
    result.innerHTML = `
        <div style="text-align: center;">
            <img src="${data.sprites.front_default}" />
            
          <h4>${data.koName}</h4>
           <p>도감번호 : ${data.id}</p>
           <p>영문이름 : ${data.name}</p>
           <audio src="${data.cries.latest}" controls></audio>
      </div>
    `;
  }
}

function getFormData(event) {
  const formData = new FormData(event.target);
  console.log("formData", ...formData);
  return formData;
}

async function getPokeData(search) {
  try {
    console.log("getPokeData 확인 - 입력값: ", search);

    const dictResponse = await axios.get("./02_pokemon-kr.json");
    const pokemonList = dictResponse.data;
    let finalSearch = search;
    let localKoName = null;

    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(search);

    if (isKorean) {
      console.log("한글검색을 위한 번호전환");
      const foundPokemon = pokemonList.find((p) => p.name.korean === search);

      if (foundPokemon) {
        finalSearch = foundPokemon.id; // 찾았다면 해당 포켓몬의 도감번호(ID)로 전환!
        localKoName = search;
        console.log(`매칭 성공! ${search} -> 도감번호 ${finalSearch}번`);
      } else {
        console.log("로컬 사전에 없는 한글 포켓몬 이름입니다.");
      }
    }

    const apiURL = `https://pokeapi.co/api/v2/pokemon/${finalSearch}`;
    console.log("최종 apiURL", apiURL);

    const response = await axios.get(apiURL);
    const data = response.data;

    if (localKoName) {
      console.log("API 호출 패스");
      data.koName = localKoName;
    } else {
      console.log("API 호출");
      const response2 = await axios.get(data.species.url);
      console.log("response2", response2);
      const koName = response2.data.names.find(
        (item) => item.language.name === "ko",
      ).name;
      data.koName = koName;
    }
    return data;
  } catch (error) {
    console.error("getPokeData 오류:", error);
    return null;
  }
}

/*
async function getPokeData(search) {
    console.log("getPokeData 확인");
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${search}`;
    console.log("apiURL", apiURL);

    const response = await axios.get(apiURL);
    console.log("response", response);
    const data = response.data;
    console.log("data", data);

    const response2 = await axios.get(data.species.url);
    console.log("response2", response2);
    const koName = response2.data.names.find(
        (item) => item.language.name === "ko" ).name;
    console.log("koName", koName);
    data.koName = koName;
    return data;
}
*/
