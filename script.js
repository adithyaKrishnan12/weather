const fetchWData = async () => {
	if (cityName.value) {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=723c5c4db9e7f3ea14a7d9d727c8d20d&units=metric`)
		// console.log(response);
		response.json().then(data => {
			console.log(data);
			let city = data.name
			let country = data.sys.country
			let currTemp = data.main.temp
			let flTemp = data.main.feels_like
			let time = new Date();
			let wDesc = data.weather[0].main
			// let minTemp = data.main.temp_min
			// let maxTemp = data.main.temp_max
			let humidity = data.main.humidity
			let pressure = data.main.pressure
			let windSpd = data.wind.speed
			let windDir = data.wind.deg

			weatherData.innerHTML = `
			





			
			<section class="vh-100">
			<div class="container py-5 h-100">
		  
			  <div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-md-8 col-lg-6 col-xl-8">
		  
				  <div class="card" style="color: #4B515D; border-radius: 35px;">
					<div class="card-body p-4">
		  
					  <div class="d-flex">
						<h6 class="flex-grow-1"><span>${city}</span>,<span>${country}</span></h6>
						<h6></h6>
					  </div>
		  
					  <div class="d-flex flex-column text-center mt-5 mb-4">
						<h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;">${currTemp} °C </h6>
						<span class="small" style="color: #868B94">${wDesc}</span>
					  </div>
		  
					  <div class="d-flex align-items-center">
						<div class="flex-grow-1" style="font-size: 1rem;">
						  <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">${windSpd} m/s
							</span></div>
						  <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">${humidity}</span>
						  </div>
						  <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${pressure}hPa </span>
						  </div>
						</div>
						<div>
						  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
							width="100px">
						</div>
					  </div>
		  
					</div>
				  </div>
		  
				</div>
			  </div>
		  
			</div>
		  </section>
			
			`


			


		}
		)
	}
	else {
		alert("Please enter valid input")
	}
}