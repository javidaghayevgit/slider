        const images = document.querySelectorAll(".images");
        const nextButton = document.querySelector(".next");
        const previousButton = document.querySelector(".previous");
        const paginationOne = document.querySelector('.paginationOne')
        const paginationTwo = document.querySelector('.paginationTwo')
        const paginationTree = document.querySelector('.paginationTree')
        
        let currentIndex = 0;
        function showSlide(currentIndex) {
            images.forEach((image, imageIndex) => {
                if (imageIndex === currentIndex) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        }

        nextButton.addEventListener("click", () => {
            if(currentIndex === images.length-1){
                currentIndex = 0
            }
            else{
                currentIndex = currentIndex +1
         }
            showSlide(currentIndex);
        });

        previousButton.addEventListener("click", () => {
            if(currentIndex === 0){ 
                currentIndex = images.length-1
            }
            else{
                currentIndex = currentIndex - 1
            }
            showSlide(currentIndex);
        });

        showSlide(currentIndex);

        paginationOne.addEventListener('click', ()=>{
            if(currentIndex !==0){
                currentIndex = 0
            }
            showSlide(currentIndex)
        })

        paginationTwo.addEventListener('click', ()=>{
            if(currentIndex !==1){
                currentIndex = 1
            }
            showSlide(currentIndex)
        })

        paginationTree.addEventListener('click', ()=>{
            if(currentIndex !==2){
                currentIndex =2
            }
            showSlide(currentIndex)
        })
