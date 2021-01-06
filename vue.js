var form = document.getElementById('myform')

form.addEventListener('submit',function(i){


	var search = document.getElementById('search').value
	
    var mySearch = search.split(' ').join('');
	fetch('https://api.github.com/users/'+ mySearch)
	.then((result) => result.json())
	.then((data)=>{
		
		console.log(data.login)
		document.getElementById('result').innerHTML= `
		<div id = 'card'> 
		<img src = "${data.avatar_url}"/>
		<div class = 'container'>
		<p > <a href="userpage.html" id='userpage'>${'Name: '}<i>${data.login}</i></a></p>
		<p class =  'boo'> ${'Type: '}<i>${data.type}</i></p>
		
		<p id ='bo'>${'Repo Names: '}<ul>
		<li id='one'></li>
		<li id ='two'></li>
		<li id = 'three'></li>
		</ul> </p>
		
		
		</div>
		</div>
		`
		
		fetch(data.repos_url)
		.then((result)=>result.json())
		.then((data)=>{
			
			document.getElementById('one').innerHTML=`
			<i>${data[0].name}</i>
			`
			document.getElementById('two').innerHTML=`
			<i>${data[1].name}</i>
			`
			document.getElementById('three').innerHTML=`
			<i>${data[2].name} </i>
			`
			
		})
	})
	
});








	
