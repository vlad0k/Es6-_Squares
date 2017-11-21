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
	del[1].onclick = (event) => {
		let lines = document.getElementsByClassName("line");
		if (lines.length !== 1) {
			for(let i = 0; i < lines.length; i++){
				if((lines[i].getBoundingClientRect().top + 2) === del[1].getBoundingClientRect().top){
					lines[i].remove();
				}
			}
		}
	}
	del[0].onclick = () => {
		let lines = document.getElementsByClassName("line");
		let cells = document.getElementsByClassName("cell");
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
			del[0].style.opacity = 0;
		}
	};
	del[i].onmouseover = () => {
		let lines = document.getElementsByClassName("line");
		let cells = document.getElementsByClassName("cell");
		if (lines.length > 1){
			del[1].style.opacity = 1;
		}
		if (cells.length !== lines.length){
			del[0].style.opacity = 1;
		}

	};
	del[i].onmouseout = (event) => {
		event.currentTarget.style.opacity = 0;
	};
}

let table = document.getElementsByTagName("div")[0];

table.onmouseover = () => {
	let lines = [...document.getElementsByClassName("line")];
	let cells = [...document.getElementsByClassName("cell")];
	if (lines.length > 1){
		del[1].style.opacity = 1;
	}
	if (cells.length !== lines.length){
		del[0].style.opacity = 1;
	}
	lines.forEach( (item, i, arr) => {
		item.onmouseover = (event) =>	{
			del[1].style.top = event.currentTarget.getBoundingClientRect().top + 2 + pageYOffset + "px";
		}
	
	});
	cells.forEach( (item, i , arr) => {
		item.onmouseover = (event) => {
			del[0].style.left = event.currentTarget.getBoundingClientRect().left + pageXOffset + "px";
		}
	});
}
table.onmouseout = () => {
	
	del.forEach( (item, i , arr) => {
		item.style.opacity = 0;
	});
}







