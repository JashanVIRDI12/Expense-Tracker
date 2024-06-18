function addExpense() {
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    if (!description || !amount || !category) {
        alert('Please enter all fields');
        return;
    }

    const tableBody = document.getElementById('expensesTable').getElementsByTagName('tbody')[0];

    const newRow = tableBody.insertRow();

    const descCell = newRow.insertCell(0);
    const catCell = newRow.insertCell(1);
    const amtCell = newRow.insertCell(2);

    descCell.textContent = description;
    catCell.textContent = category;
    amtCell.textContent = amount;

    document.getElementById('expenseForm').reset();
}
