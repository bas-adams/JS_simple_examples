(() => {

	const form = document.querySelector('form[name=bmi]');

	const getBMI = (weight, height) => {

			let newWeight = parseInt(weight, 10);
			let newHeight = parseInt(height, 10);

			return ( newWeight / ( newHeight /100 * newHeight / 100)).toFixed(1);
		};

	const getHealthMessage = (unit) => {

			let healtMessage;

			if( unit < 18.5 ){
				healtMessage = 'Underweight';
			}	else if( unit > 18.5 && unit < 25 ){
				healtMessage = 'Vary good';
			}	else if( unit > 25 ){
				healtMessage = 'Overweight';
			}

			return healtMessage;

		};

	const onSubmit = event => {

		event.preventDefault();

		const weight = form.querySelector('input[name=weight]').value;
		const height = form.querySelector('input[name=height]').value;
		
		const result = form.querySelector('.result');
		const health = form.querySelector('.health');

		const bmi =  getBMI( weight, height );

		result.textContent = bmi;
		health.textContent = getHealthMessage(bmi);


	};

	form.addEventListener('submit', onSubmit, false);

})();
