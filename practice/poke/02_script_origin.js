console.log("script 확인");

const form = document.querySelector("#searchForm");
const result = document.querySelector("#searchResult");

form.addEventListener("submit", searchFormHandler);

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
try{    
    console.log("getPokeData 확인 - 입력값: ", search);

    const dictResponse = await axios.get("./02_pokemon-kr.json");
    const pokemonList = dictResponse.data;        
    let finalSearch = search;
    let localKoName = null;

    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(search);
        
    if (isKorean) {
        console.log("한글검색을 위한 번호전환")
        const foundPokemon = pokemonList.find(p => p.name.korean === search);
        
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
        (item) => item.language.name === "ko").name;
        data.koName = koName;
    }
        return data;
    }
    catch (error) {
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