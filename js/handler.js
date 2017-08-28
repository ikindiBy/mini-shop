
/*
*   Handler for groups of things per checked type.
*/

    let setChecks = document.body.querySelector('.set_checks');
    let setChecksArr = Array.from(setChecks.children);

    let setRows = document.body.querySelector('.content');
    let rowsArr = Array.from(setRows.children);

    let arrCheckedDiv = setChecks.getElementsByTagName('div');
    let arrCheckedSpan = setChecks.getElementsByTagName('span');

    for (let i=0; i<arrCheckedSpan.length; i++){
		arrCheckedSpan[i].addEventListener('click', e => {
			rowsArr[i].classList.toggle('-shown');
			});
		arrCheckedDiv[i].addEventListener('click', e => {
			rowsArr[i].classList.toggle('-shown');
			});
	};

	let button = document.body.querySelector('button');
	let checkbox = document.body.querySelectorAll('.checkbox');
	button.addEventListener('click', e => {
		rowsArr.forEach((row, i) => {
			if (!row.classList.contains('-shown')) {
				checkbox[i].checked = true;
				row.classList.toggle('-shown');
			}
		});
	});
	
	/*  for slider  */ 

	// probably from DB
	let itemsForMen = [{size: ['XL','L'], colors: ['rgb(255,230,55)','rgb(22,94,185)','rgb(83,82,83)'], img : "images/img_1.png", name: 't-shirt', price:5}, 
					  {size: ['XL','L','M'], colors: false, img : "images/img_2.png", name: 'pants forclaz', price:30},
					  {size: '10 litres', colors: false, img : "images/img_3.png", name: 'backpack', price:60}, 
					  {size: ['M','S'], colors: false, img : false, name: 'jacket', price:12},
					  {size: '', colors: false, img : false, name: 'socks', price:2}, 
					  {size: '', colors: false, img : false, name: 'cap', price:15},
					  {size: '', colors: false, img : "images/img_5.png", name: 'sneakers', price:21}, 
					  {size: '', colors: false, img : "images/img_5.png", name: 'sneakers', price:22},
					  {size: '', colors: false, img : "images/img_5.png", name: 'sneakers', price:52},
					  {size: 'normal', colors: ['rgb(183,82,183)'], img : false, name: 'tie', price:12},
					  {size: '', colors: false, img : false, name: 'tie', price:5},
					  {size: '', colors: false, img : false, name: 'tie', price:57},
					  {size: ['XXl','XL','L','M'], colors: false, img : 'images/img_4.png', name: 'coat', price:259},
	];

	let itemsForWomen = [{size: ['L','M'], colors: false, img : "images/img_4.png", name: 'jacket', price:60}, 
					  {size: ['9','8','8,5'], colors: false, img : "images/img_5.png", name: 'trekking shoes', price:80},
					  {size: ['L','M', 'S', 'XS'], colors: ['rgb(211,167,172)'], img : "images/img_6.png", name: 't-shirt', price:20}, 
					  {size: ['M','S'], colors: false, img : false, name: 'jacket', price:12},
					  {size: '', colors: false, img : "images/img_3.png", name: 'socks', price:2}, 
					  {size: '', colors: false, img : false, name: 'cap', price:15},
					  {size: ['L', 'XS'], colors: ['rgb(11,167,172)'], img : "images/img_6.png", name: 't-shirt', price:21}, 
					  {size: ['XXL','M', 'S', 'XS'], colors: ['rgb(211,67,172)'], img : "images/img_6.png", name: 't-shirt', price:22},
					  {size: ['XL','M', 'S', 'XS'], colors: ['rgb(121,17,12)'], img : "images/img_6.png", name: 't-shirt', price:52},
					  {size: 'normal', colors: ['rgb(211,167,172)'], img : false, name: 'tie', price:12},
					  {size: '', colors: false, img : false, name: 'tie', price:5},
					  {size: '', colors: false, img : false, name: 'tie', price:57},
					  {size: ['M'], colors: false, img : 'images/img_4.png', name: 'coat', price:259},
					  {size: ['L','M'], colors: false, img : 'images/img_4.png', name: 'coat', price:388}
	];

	let itemsForChildren = [{size: '3 litres', colors: false, img : "images/img_3.png", name: 'backpack', price:100}, 
					  {size: '5 litres', colors: false, img : "images/img_3.png", name: 'backpack', price:180},
					  {size: false, colors: ['rgb(211,167,12)'], img : "images/img_3.png", name: 'backpack', price:200}, 
					  {size: '6 litres', colors: false, img : "images/img_3.png", name: 'backpack', price:120}	  
	];



	let countProductsMen = itemsForMen.length; 
	let countProductsWomen = itemsForWomen.length;
	let countProductsChildren = itemsForChildren.length;


	let countPagesM = rowsArr[0].querySelector('.all_groups');
	let currentPageM = rowsArr[0].querySelector('.current');

	let countPagesW = rowsArr[1].querySelector('.all_groups');
	let currentPageW = rowsArr[1].querySelector('.current');

	let countPagesC = rowsArr[2].querySelector('.all_groups');
	let currentPageC = rowsArr[2].querySelector('.current');
	
	countPagesM.innerHTML = (countProductsMen%3 == 0) ? countProductsMen/3 : 1 + Math.floor(countProductsMen/3);
	countPagesW.innerHTML = (countProductsWomen%3 == 0) ? countProductsWomen/3 : 1 + Math.floor(countProductsWomen/3);
	countPagesC.innerHTML = (countProductsChildren%3 == 0) ? countProductsChildren/3 : 1 + Math.floor(countProductsChildren/3);

	let toNextM = document.body.querySelectorAll('.fa-angle-right')[0];
	let toPrevM = document.body.querySelectorAll('.fa-angle-left')[0];

	let toNextW = document.body.querySelectorAll('.fa-angle-right')[1];
	let toPrevW = document.body.querySelectorAll('.fa-angle-left')[1];

	let toNextC = document.body.querySelectorAll('.fa-angle-right')[2];
	let toPrevC = document.body.querySelectorAll('.fa-angle-left')[2];

	
	let setItemsMen = document.body.querySelectorAll('.set_items')[0];
	let setItemsWomen = document.body.querySelectorAll('.set_items')[1];
	let setItemsChild = document.body.querySelectorAll('.set_items')[2];


	for (let i=0; i<3; i++){
		fillItem(itemsForMen, 1, setItemsMen.children[i], i);
	};

	for (let i=0; i<3; i++){
		fillItem(itemsForWomen, 1, setItemsWomen.children[i], i);
	};

	for (let i=0; i<3; i++){
		fillItem(itemsForChildren, 1, setItemsChild.children[i], i);
	};

	

	toNextM.addEventListener('click', () => 
		toNextSetOfItems(currentPageM, countPagesM, setItemsMen, countProductsMen, itemsForMen)
	);
	toPrevM.addEventListener('click', () => 
		toPrevSetOfItems(currentPageM, countPagesM, setItemsMen, countProductsMen, itemsForMen)
	);

	toNextW.addEventListener('click', () => 
		toNextSetOfItems(currentPageW, countPagesW, setItemsWomen, countProductsWomen, itemsForWomen)
	);
	toPrevW.addEventListener('click', () => 
		toPrevSetOfItems(currentPageW, countPagesW, setItemsWomen, countProductsWomen, itemsForWomen)
	);

	toNextC.addEventListener('click', () => 
		toNextSetOfItems(currentPageC, countPagesC, setItemsChild, countProductsChildren, itemsForChildren)
	);
	toPrevC.addEventListener('click', () => 
		toPrevSetOfItems(currentPageC, countPagesC, setItemsChild, countProductsChildren, itemsForChildren)
	);


	function toNextSetOfItems(currentPage, countPages, setItems, countProducts, arrayOfItems)	{		
			if(+currentPage.innerHTML<(+countPages.innerHTML)) {
				currentPage.innerHTML++;
				let curSet = (+currentPage.innerHTML);
				Array.from(setItems.children).forEach((item,i) => {
					if((curSet-1)*3+i < countProducts) {
						fillItem(arrayOfItems, curSet, item, i);				
					} else {
						item.style.display='none';
					}
				});
			}
		};

	function toPrevSetOfItems(currentPage, countPages, setItems, countProducts, arrayOfItems){
		if(+currentPage.innerHTML>1) {
			currentPage.innerHTML--;
			let curSet = (+currentPage.innerHTML);
			Array.from(setItems.children).forEach((item,i) => {
				if((curSet-1)*3+i >= 0) {
					item.style.display='inline-block';
					fillItem(arrayOfItems, curSet, item, i);
				} 
			});
		}
	};
					
	function fillItem(array, curSet, item, i){
		/* for image  */
				if (array[(curSet-1)*3+i].img) {
					let imageForItem = document.createElement('img');
					imageForItem.setAttribute('src',array[(curSet-1)*3+i].img);
					if (item.querySelector('.image').children.length) {
						item.querySelector('.image').children[0].remove();
						item.querySelector('.image').appendChild(imageForItem);
					} else {	
						item.querySelector('.image').appendChild(imageForItem);
					}	
				} else {
					item.querySelector('.image').innerHTML=null;
				};
		/* for size  */
				let arrayOfSizes = array[(curSet-1)*3+i].size;

				if (Array.isArray(arrayOfSizes)) {

				 	let p = document.createElement('p');
					p.innerHTML = 'size';

					let ul = document.createElement('ul');

					for (let i=0; i<arrayOfSizes.length; i++) {
						let li = document.createElement('li');
						li.innerHTML = `<a href="#">${arrayOfSizes[i]}</a>` ;
						ul.appendChild(li);
					};
					
					if (item.querySelector('.size_list').children.length) {
						item.querySelector('.size_list').innerHTML='';
						item.querySelector('.size_list').appendChild(p);
					}else {
						item.querySelector('.size_list').appendChild(p);
					};
				 	
				 	item.querySelector('.size_list').appendChild(ul);
				 } else if(typeof (arrayOfSizes) === 'string'){
				 	let span = document.createElement('span');
				 	span.innerHTML = arrayOfSizes ;
					if (item.querySelector('.size_list').children.length) {
						item.querySelector('.size_list').innerHTML='';
						item.querySelector('.size_list').appendChild(span);
					}else {
						item.querySelector('.size_list').appendChild(span);
					};
				};
					
		/* for color  */
				if (Array.isArray(array[(curSet-1)*3+i].colors)) {
					let arrayOfColors = array[(curSet-1)*3+i].colors;

					if (item.querySelector('.colors').children) {
						item.querySelector('.colors').innerHTML='';
						arrayOfColors.forEach(color => {
							let div = document.createElement('div');
							div.style.background = color;
							item.querySelector('.colors').appendChild(div);
						});
						
					}else {
						arrayOfColors.forEach(color => {
							let div = document.createElement('div');
							div.style.background = color;
							item.querySelector('.colors').appendChild(div);
						});
					};

				}  else {
					item.querySelector('.colors').innerHTML='';
				};

		/* for price and item's name  */
				item.querySelector('.name_item').innerHTML=array[(curSet-1)*3+i].name;
				item.querySelector('.price').innerHTML=array[(curSet-1)*3+i].price+',00';
	};


	 

