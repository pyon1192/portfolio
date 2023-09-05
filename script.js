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

  document.addEventListener("DOMContentLoaded", function() {
    const modalButtons = document.querySelectorAll(".modal-button");
    modalButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const target = document.querySelector(button.dataset.modalTarget);
        target.style.display = "block";
      });
    });
  
    const closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const modal = button.closest(".modal");
        modal.style.display = "none";
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const modalButtons = document.querySelectorAll(".modal-button");
    const overlay = document.getElementById("overlay");
    
    modalButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const target = document.querySelector(button.dataset.modalTarget);
        target.style.display = "block";
        overlay.style.display = "block"; // オーバーレイを表示
      });
    });
  
    const closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const modal = button.closest(".modal");
        modal.style.display = "none";
        overlay.style.display = "none"; // オーバーレイを非表示
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const modalButtons = document.querySelectorAll(".modal-button");
    const overlay = document.getElementById("overlay");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("main-image");
  
    modalButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const target = document.querySelector(button.dataset.modalTarget);
        target.style.display = "block";
        overlay.style.display = "block";
      });
    });
  
   
  
  