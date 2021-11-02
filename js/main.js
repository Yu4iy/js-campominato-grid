const setBtn = document.querySelector('#set-dimensions')
const dimensionsLevel = document.querySelector('#dimensions')
const wrapGrid = document.querySelector('.wrap-grid')

setBtn.addEventListener('click', function(){
	console.log('test');
	wrapGrid.innerHTML = '';
	const gridLvl = dimensionsLevel.value

	if(gridLvl === '1'){
			cellsNumber = 100;
			cellsPerSide = 10;
		}else if(gridLvl === '2'){
			cellsNumber = 81;
			cellsPerSide = 9;
		}else if(gridLvl === '3'){
			cellsNumber = 64;
			cellsPerSide = 8;
		}
		console.log(cellsNumber);
		console.log(cellsPerSide);
	
	const grid = document.createElement('div')
	grid.classList.add('grid');
	wrapGrid.append(grid)

	for(let i = 1; i < cellsNumber + 1; i++){
		const node = document.createElement('div');
		node.classList.add('square')
		grid.append(node)
		node.innerHTML += `<span>${i}</span>`
			node.addEventListener('click', function(){	
				node.classList.add('clicked')
			})


		if(gridLvl === '1'){
			node.classList.add('lv1')
		}else if(gridLvl === '2'){
			node.classList.add('lv2')
		}else if(gridLvl === '3'){
			node.classList.add('lv3')
		}
		
	}	



})