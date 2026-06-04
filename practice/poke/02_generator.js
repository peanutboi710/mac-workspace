/**
 * 02_pokemon.json을 기반으로 02_pokemonKr.json을 자동 생성하는 스크립트입니다.
 * 실행 방법: node 02_generator.js
 */
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = path.join(__dirname, "02_pokemonKr.json");
const MAX_ID = 1015;

async function generatePokemonData() {
  const pokemonKrList = [];
  console.log(`포켓몬 데이터 수집 시작 (1 ~ ${MAX_ID})...`);

  for (let id = 1; id <= MAX_ID; id++) {
    try {
      // PokeAPI species 엔드포인트 호출 (한글 이름 포함)
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      );
      const names = response.data.names;

      // 언어별 이름 추출
      const englishName = names.find((n) => n.language.name === "en").name;
      const koreanName = names.find((n) => n.language.name === "ko").name;

      // 요청하신 형식으로 데이터 구성
      pokemonKrList.push({
        id: id,
        name: {
          english: englishName,
          korean: koreanName,
        },
      });

      if (id % 50 === 0) {
        console.log(`진행률: ${id}/${MAX_ID} 완료...`);
      }
    } catch (error) {
      console.error(`ID ${id} 데이터 수집 중 오류 발생:`, error.message);
    }
  }

  // 파일 저장
  try {
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify(pokemonKrList, null, 2),
      "utf-8",
    );
    console.log(`성공! ${OUTPUT_FILE} 파일이 생성되었습니다.`);
  } catch (err) {
    console.error("파일 저장 중 오류 발생:", err);
  }
}

generatePokemonData();
