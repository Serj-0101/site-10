// Небольшая клиентская логика: обработка формы на contact.html.
// Скрипт не обязателен для работы сайта — страницы автономны без JS.

function onSubmitForm(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const name = data.get('name') || 'Гость';
  const message = data.get('message') || '';
  const result = document.getElementById('formResult');
  result.textContent = `Спасибо, ${name}! Сообщение принято (локально): "${message.slice(0,200)}"`;
  form.reset();
  return false;
}

// Экспортируем в глобальную область, чтобы форма могла вызвать onSubmitForm через onsubmit=""
window.onSubmitForm = onSubmitForm;