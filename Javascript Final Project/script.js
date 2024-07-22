
    function generateCharacter() {
        const randNumber = Math.ceil(Math.random() * 83);
        const image = document.getElementById("img");
        let characterData;
    
        fetch(`https://akabab.github.io/starwars-api/api/id/${randNumber}.json`)
            .then((response) => response.json())
            .then((data) => {
                characterData = data;
                image.innerHTML = `<img width= 50% alt=Image of ${data["name"]} src=${data["image"]}>`;
                console.log(data);
            });
        
        document.querySelector('.name').innerHTML = '<em>loading..<em>';
            document.querySelector('.height').innerHTML = '<em>loading..<em>';
            document.querySelector('.mass').innerHTML = '<em>loading..<em>';
            document.querySelector('.gender').innerHTML = '<em>loading..<em>';
            document.querySelector('.hair-color').innerHTML = '<em>loading..<em>';
            document.querySelector('.skin-color').innerHTML = '<em>loading..<em>';
            document.querySelector('.eye-color').innerHTML = '<em>loading..<em>';
    
        setTimeout(() => {
            document.querySelector('.name').innerHTML = characterData['name'];
            document.querySelector('.height').innerHTML = characterData['height'] + 'cm';
            document.querySelector('.mass').innerHTML = characterData['mass'] + 'kg';
            document.querySelector('.gender').innerHTML = characterData['gender'];
            document.querySelector('.hair-color').innerHTML = characterData['hair_color'];
            document.querySelector('.skin-color').innerHTML = characterData['skin_color'];
            document.querySelector('.eye-color').innerHTML = characterData['eye_color'];
        }, 1000);
    }