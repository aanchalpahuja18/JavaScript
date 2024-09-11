const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi < 18.6){
        results.innerHTML = `<span>${bmi}</span>: You are underweight`;
    }
   else if(bmi > 18.6 && bmi < 24.9){
      results.innerHTML = `<span>${bmi}</span>: You are Normal range`;
  }
  else{
    results.innerHTML = `<span>${bmi}</span>: You are overweight`;
  }
  }
});


//here we are selecting the height & weight inside the form event listener coz we want the values which the user has given to be fetched when we submit the form.
//If we fetch the height & weight outside the form event listener it will give empty values everywhere since whenever the webpage is loaded JS script is also loaded with it so empty value will be fetched everytime the webpage is loaded & no value will be fetched there. So to avoid null values we take the values whenever the form is submitted.