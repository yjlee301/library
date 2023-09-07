// app.js
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const gallery = document.getElementById("gallery");

    // 가상의 책 데이터 (books.json 대신 사용)
    const books = [
        {
            title: "인생을 숫자로 말할 수 있나요?",
            author: "저자 1",
            keywords: ["진로", "직업"],
            category: "그림책",
        },
        {
            title: "선량한 차별주의자",
            author: "저자 2",
            keywords: ["키워드3", "키워드4"],
            category: "독서토론", "중학교"
        },
        // 추가 책 정보를 계속해서 입력합니다.
    ];

    // 책 데이터를 갤러리에 표시하는 함수
    function displayBooks(books) {
        gallery.innerHTML = "";
        books.forEach((book) => {
            const card = document.createElement("div");
            card.classList.add("book-card");
            card.innerHTML = `
                <h2>${book.title}</h2>
                <p>저자: ${book.author}</p>
                <p>키워드: ${book.keywords.join(", ")}</p>
                <p>카테고리: ${book.category}</p>
            `;
            gallery.appendChild(card);
        });
    }

    // 검색어 입력 시 책 필터링 및 갤러리 업데이트
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredBooks = books.filter((book) => {
            const keywords = book.keywords.join(" ").toLowerCase();
            return keywords.includes(searchTerm);
        });
        displayBooks(filteredBooks);
    });

    // 페이지 로드 시 모든 책 표시
    displayBooks(books);
});
