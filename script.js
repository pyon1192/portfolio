function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}


// DOM（Document Object Model）が完全に読み込まれた後に実行するコード
document.addEventListener("DOMContentLoaded", function() {
    // "scrollDownButton"というIDを持つHTML要素（この場合はボタン）を取得
    const button = document.getElementById("scrollDownButton");
    // ボタンがクリックされたときのイベントリスナーを追加
    button.addEventListener("click", function() {
        const vh = window.innerHeight; //1vhのピクセル数を定義
        const currentScroll = window.scrollY; //現在のスクロール位置を定義
      // "behavior: 'smooth'"によってスムーズなスクロールアニメーションがかかる
      window.scrollBy({
        top: currentScroll + vh,  // 縦方向のスクロール量定義
        behavior: 'smooth'  // スムーズスクロール
      });
    });
  });
//モーダルウィンドウの開くか閉じるかのボタン操作
  document.addEventListener("DOMContentLoaded", function() {
    const modalButtons = document.querySelectorAll(".modal-button");
    modalButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const target = document.querySelector(button.dataset.modalTarget);
        target.classList.add("active");
      });
    });
  
    const closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const modal = button.closest(".modal");
        modal.classList.remove("active");
      });
    });
  });
  
//モーダルウィンドウ以外を薄暗くする操作
  document.addEventListener("DOMContentLoaded", function() {
    const modalButtons = document.querySelectorAll(".modal-button");
    const overlay = document.getElementById("overlay");
    modalButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const target = document.querySelector(button.dataset.modalTarget);
        target.classList.add("active");
        overlay.style.display = "block"; // オーバーレイを表示
      });
    });
  
    const closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const modal = button.closest(".modal");
        modal.classList.remove("active");
        overlay.style.display = "none"; // オーバーレイを非表示
      });
    });
  });



  //skillの詳細表示
  // 例: マウスオーバーで詳細を表示
document.addEventListener("DOMContentLoaded", function() {
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    card.addEventListener('mouseover', function() {
      // 詳細を表示する処理
    });
  });
});

//モーダル内のサムネイルクリック→メインイメージに反映
document.querySelectorAll('.thumbnail').forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        const previewImage = thumbnail.closest('.modal').querySelector('.preview img ');
        previewImage.src = thumbnail.src
    });
});

