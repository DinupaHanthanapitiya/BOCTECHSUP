document.getElementById('togglePassword').addEventListener('click', function(){
  const pw = document.getElementById('password');
  if (pw.type === 'password') { pw.type = 'text'; this.textContent = 'Hide'; }
  else { pw.type = 'password'; this.textContent = 'Show'; }
});

document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  if (!username || !password) { alert('Please enter both username and password'); return; }
  // Placeholder behaviour — replace with real authentication.
  alert('Signed in as ' + username);
});
