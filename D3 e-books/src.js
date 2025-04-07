/*/let i = 1
	while(i<=2){
		console.log(i);
		i++;
	}
	let programming =  ["CPP", "HTML", "CSS", "JAVASRCIPT"];
	for (var j = 0; j < programming.length; j++) {
		console.log(programming[j]);
	}
	let day = "Monday";
	switch (day) {
		case "Monday":
			console.log("Today is Monday");
			break;
		case "Tuesday":
			console.log("Today is Tuesday");
			break;
		case "Wednesday":
			console.log("Today is Wednesday");
			break;
			case "Thursday":
				console.log("Today is Thursday");
				break;
				case "Friday":
					console.log("Today is Friday");
		default:
			console.log("Looking forward to the weekend");
	}
	function numbers(a, b) {
		return a + b;
	  }
	  
	  let x = numbers(4, 5);
	  console.log(x); 

	  function hello(a, b, c) {
		return a + b + c;
	}
	
	console.log(hello(3, 4, 5));  // Output: 12
	/*/
		const vsr = {
			color: "blue",
			name: "color",
			together: function() {
				return this.name + " " + this.color;
			}
		}
document.write(vrs.together())