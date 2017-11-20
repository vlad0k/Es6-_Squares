let add = [...document.getElementsByClassName('add')];

var tableWidth = 272;
var addButLeft = 356;

add.forEach((item,i) => {
		item.onclick = () => {
			let lines = [...document.getElementsByClassName("line")];
			if (i === 0){
				
				let addLine = lines[0].cloneNode(true);
				document.body.getElementsByTagName("div")[0].appendChild(addLine);
				return;
			}
			let cell = lines[0].firstElementChild;
			lines.forEach( (elem) => elem.appendChild(cell.cloneNode(true)) );
			tableWidth += 68;
			document.body.getElementsByTagName("div")[0].style.width = tableWidth + "px";
			addButLeft += 68;
			add[1].style.left = addButLeft + "px";	
		}
});

let del = [...document.getElementsByClassName("del")];


for( let i = 0; i < del.length; i++){
	del[i].onclick = (event) => {
		let lines = document.getElementsByClassName("line");
		var cells = document.getElementsByClassName("cell");
		if (del.indexOf(event.currentTarget) === 1 && lines.length !== 1) {
			for(let i = 0; i < lines.length; i++){
				if(lines[i].getBoundingClientRect().top === del[1].getBoundingClientRect().top){
					lines[i].remove();
				}
			}
			return;
		}
		if (cells.length !== lines.length){
			for(let i = 0; i < cells.length; i++){
				
				if (cells[i].getBoundingClientRect().left === del[0].getBoundingClientRect().left){
					cells[i].remove();
				}	
			}
			tableWidth -= 68;
			document.body.getElementsByTagName("div")[0].style.width = tableWidth + "px";
			addButLeft -= 68;
			add[1].style.left = addButLeft + "px";
	}
	};
}

let table = document.getElementsByTagName("div")[0];

table.onmouseover = () => {
	let lines = [...document.getElementsByClassName("line")];
	let cells = [...document.getElementsByClassName("cell")];
	lines.forEach( (item, i, arr) => {
		item.onmouseover = (event) =>	{
			del[1].style.top = event.currentTarget.getBoundingClientRect().top + pageYOffset + "px";
		}
	
	});
	cells.forEach( (item, i , arr) => {
		item.onmouseover = (event) => {
			del[0].style.left = event.currentTarget.getBoundingClientRect().left + pageXOffset + "px";
		}
	});
	cells.forEach( (item, i ,arr) => {
		item.onclick =  (event) =>{
				event.currentTarget.style.backgroundColor = "white";
		}
	});  
}








