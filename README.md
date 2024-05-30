<p align="center">
  <br>
  <img src="https://user-images.githubusercontent.com/79623316/175818637-4a2080fc-454c-4c37-97b0-81cba5cfa3ab.svg">
</p>

<br>

# Welaundry

<p align="left">
  <img src="https://img.shields.io/github/package-json/v/hxxtae/we-laundry-client?color=%233fb911" alt="git-repository-versipn">
  <img src="https://img.shields.io/github/repo-size/hxxtae/we-laundry-client?color=%23&logo=github" alt="git-repo-size">
  <img src="https://img.shields.io/netlify/b8c06778-2b90-4fd3-a346-5060aba03482?logo=netlify" alt="netlify">
  <img src="https://img.shields.io/github/last-commit/hxxtae/we-laundry-client?color=%23e7e7e7&logo=github" alt="git-last-commit">
  <img src="https://img.shields.io/github/license/hxxtae/we-laundry-client?color=%23097aba&logo=github" alt="git-license">
</p>

<p align="left">
  <a href="https://hxxtae.github.io/we-laundry-desc/" target="_blank">
    <img src="https://img.shields.io/badge/homepage-white?style=for-the-badge&logo=googlechrome&color=%23097aba&logoColor=ffffff">
  </a>
  <a href="https://welaundry.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/APPLICATION-white?style=for-the-badge&logo=googlechrome&color=000000&logoColor=ffffff">
  </a>
  <a href="https://welaundry-collections.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/MANAGER-white?style=for-the-badge&logo=googlechrome&color=3BD671&logoColor=ffffff">
  </a>
  <br>
</p>

<br>

## Description

### 프로젝트 소개
- 세탁소에서 사용되는 포스를 바탕으로 제작한 `세탁소 전용 포스 웹 애플리케이션` 입니다.
- 이전 SSR 방식의 <a href="https://hxxtae.github.io/we-laundry-asis/" target="_blank"><U>믿음세탁</U></a> 포스 웹 애플리케이션을 바탕으로 새롭게 개발되었습니다.

### 프로젝트 기획 의도   
- 대중적인 포스 시스템은 일반 음식점이나, 카페, 의류매장에서 많이 사용하지만, 세탁소 업종에서는   
포스 시스템이 많지 않거나, 수기로 장부를 사용하기 때문에 이를 개선하고자 프로젝트를 기획하게 되었습니다.

### 어떤 문제를 해결할 수 있나요? 
- 동네 세탁소의 아날로그 방식의 단점을 보완할 수 있습니다.   
수기 장부로 관리되어지는 데이터를 온라인에서 편리하게 데이터를 관리할 수 있습니다.

- 세탁소 포스기는 세탁소에서 사용되는 전용 포스 시스템입니다.    
이 시스템은 고객들의 주문을 처리하고, 결제를 처리하며, 세탁 과정을 관리하는 데 필요한 기능을 제공합니다.

- 세탁소 포스기는 세탁소의 업무를 효율적으로 처리하는 데 필요한 기능을 모두 제공합니다.    
이는 세탁소의 업무 처리 속도를 높이고, 고객들의 만족도를 높이는 데 큰 도움이 됩니다.

- 고객 맞춤 및 매출 향상에 기여할 수 있습니다.   
날짜별, 고객별 등 데이터를 손쉽게 조회하고, 나의 매출, 고객 목록, 품목 관리 등을 통해 고객의 니즈를 분석할 수 있습니다.

### 어떤 사람들이 이 애플리케이션을 사용하면 좋은가요?
- 일반 동네 세탁소(소상공인)를 대상으로 합니다.

### 앞으로 방향
- 차기 Develop으로 카드 단말기를 통한 결제 시스템을 구현할 예정입니다.   
동시에 어떻게 기술을 적용하고, 어떤 기술을 사용하며, 왜 사용하는지 에 대한 고민을 계속해서 이어나갈 것입니다.

### 주요 기능
- 인증
  > 회원가입 및 로그인을 통한 인증 및 각 사용자별 고유 포스 환경 제공.

- 조회/관리
  > 고객 정보 관리 기능(리스트별로 조회하거나 추가, 수정, 삭제)   
  > 주소 정보 관리 기능(리스트별로 조회하거나 추가, 수정, 삭제)   
  > 세탁 품목 정보 관리 기능(카테고리별로 조회하거나 카테고리 및 품목 추가, 수정, 삭제)   

- 접수/통계
  > 등록된 고객 정보를 기반으로 세탁 품목 주문 접수 및 주문 조회할 수 있습니다.   
  > 접수된 주문 데이터를 기반으로 누적 판매 품목 및 가격을 table과 Graph로 시각적인 데이터를 제공합니다.

### GitBook

[Welaundry GitBook Docs](https://hxxtae.gitbook.io/welaundry-docs/)

## Stack

### Client

| TypeScript | React    | Recoil    | React-Query    | styled-components    | framer-motion    |
| :--------: | :------: | :-------: | :------------: | :------------------: | :--------------: |
|   ![ts]    | ![react] | ![recoil] | ![react-query] | ![styled-components] | ![framer-motion] |

<br>

### Server

| JavaScript | Express    | MongoDB    | Jwt    |
| :--------: | :--------: | :--------: | :----: |
|   ![js]    | ![express] | ![MongoDB] | ![Jwt] |

## Deploy

| Client (netlify) | Server (koyeb) |
| :--------------: | :------------: |
| ![netlify]       | ![koyeb]       |


<br>

## License

This project is licensed under the APACHE-2.0 License.

![license](https://img.shields.io/github/license/hxxtae/we-laundry-client?color=%23097aba&logo=github&style=for-the-badge)


<br>

![footer](https://capsule-render.vercel.app/api?type=waving&color=216ba5&height=150&section=footer)

<!-- Stack Icon References -->
<!-- client -->
[ts]: https://user-images.githubusercontent.com/79623316/175767679-b759c752-d9f9-49d2-a503-276e30292442.svg
[react]: https://user-images.githubusercontent.com/79623316/175767657-f4926c0c-0c8e-4f4d-957e-c4c4877ffe16.svg
[recoil]: https://user-images.githubusercontent.com/79623316/175767881-e60e3519-242d-49f6-80c7-ac8b40470e2f.svg
[react-query]: https://user-images.githubusercontent.com/79623316/175767768-3740450e-cb18-4b23-b2f9-174edcdb87a5.svg
[styled-components]: https://user-images.githubusercontent.com/79623316/175817624-3a749264-9f78-4e14-a385-cf4561a80dcb.svg
[framer-motion]: https://user-images.githubusercontent.com/79623316/175818241-8c03852c-3335-4fcf-80d8-e12045dae3c0.png

<!-- server -->
[js]: https://user-images.githubusercontent.com/79623316/175768623-70eebdf4-b364-4169-887a-897e9b7e79ff.svg
[express]: https://user-images.githubusercontent.com/79623316/175768610-87b88173-79d2-4eb9-a6ff-c2f861fecca5.svg
[mongodb]: https://user-images.githubusercontent.com/79623316/175768561-f3886ba4-d0d2-4bb1-b1a1-ba64422415b8.svg
[jwt]: https://user-images.githubusercontent.com/79623316/175768540-b71c1cce-2f8d-4406-a8b9-de70d756a5be.svg

<!-- Deploy Icon -->
[netlify]: https://user-images.githubusercontent.com/79623316/206897886-4a18e242-5282-4d5b-a0cc-795b645f6132.svg
[koyeb]: https://user-images.githubusercontent.com/79623316/206897918-e801bc16-da50-4b46-9251-0dd951f32d5f.svg



