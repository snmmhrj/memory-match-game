var selectedCards=[];

function showCard(event){
    
    if (event.target.classList.contains('match') === false){
        toggleCards(event.target)
        if (selectedCards.length <= 1){
            selectedCards.push(event)
            if (selectedCards.length === 2){
                compareImages();
            }
        }
    }
}

function toggleCards(clickTarget) {
    clickTarget.classList.toggle("open");
    clickTarget.classList.toggle("show");
}

function compareImages(){
    if (selectedCards[0].target.firstElementChild.className === selectedCards[1].target.firstElementChild.className){
        selectedCards[0].target.classList.toggle("match");
        selectedCards[1].target.classList.toggle("match");
        selectedCards=[]
    }else{
        setTimeout(function () {
            toggleCards(selectedCards[0].target)
            toggleCards(selectedCards[1].target)
            selectedCards=[]
        },1000)
    }
}

function shuffleCards() {
    let list = document.getElementById('cardList').getElementsByTagName("li");
    let shuffledList = shuffle(list)
    let deckCards =  document.getElementById('cardList')
    for (let i=0;i<shuffledList.length;i++) {
        shuffledList[i].classList.remove("open");
        shuffledList[i].classList.remove("show");
        shuffledList[i].classList.remove("match");
        deckCards.appendChild(shuffledList[i]);
    }
  }

  function shuffle(card) {
    var currentIndex = card.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = card[currentIndex];
      card[currentIndex] = card[randomIndex];
      card[randomIndex] = temporaryValue;
    }
  
    return card;
  }
  

function resetCards(){
    shuffleCards()
    selectedCards =[]
}