let addButton = document.getElementById("add");
const todo = document.getElementById("todo");

const baseURL = 'http://localhost:2600/tasks';

async function addTodo(e){
  e.preventDefault();
  let title = document.getElementById("input");
  title = title.value.trim();
  if(!title) return;
  try {
    const result = await fetch(`${baseURL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title
      })
    });

    const jsonRes = await result.json();
    render();
  } catch(error){
    console.log(error);
  }
}

addButton.addEventListener('click', addTodo);

async function render(){
  const result = await fetch(`${baseURL}`);
  const jsonRes = await result.json();
  console.log('GET', jsonRes);
  for(let i=0; i < jsonRes.tasks.length; i++){
    const item = document.createElement('li');
    const textnode = document.createTextNode(jsonRes.tasks[i].title);
    let span = document.createElement('span');
    let h5 = document.createElement('h5');
    h5.innerHTML = jsonRes.tasks[i].id;
    h5.id = jsonRes.tasks[i].id;
    span.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    h5.style.display = 'none';
    item.appendChild(textnode);
    item.appendChild(span);
    item.appendChild(h5);
    todo.appendChild(item);
  }
}


async function deleteTodo(e){
  e.preventDefault();
  //console.log('H5', e.target.parentNode.nextSibling.innerText);
  const id = Number(e.target.parentNode.nextSibling.innerText);
  console.log('ID', id);
  const result = await fetch(`${baseURL}/${id}`, { method: 'DELETE' });
  // if(result.status === 204){
  //   render();
  // }
}



document.addEventListener('click', (e) => {
  console.log('TARGET', e.target.tagName);
  if(e.target.tagName === 'I'){
    deleteTodo(e);
  }
});


 













