function getFact() {

    const animalType = document.getElementById("animalType").value;

    axios.get("https://cat-fact.herokuapp.com/facts/random?animal_type=" + animalType).then(response => {
        const fact = response.data.text;
        document.getElementById("fact").innerText = fact;
    })
}