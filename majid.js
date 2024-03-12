$(document).ready(function() {
    // Add Income
    $('#btnAddI').click(function() {
        var amount = parseInt($('#amount').val());
        var currentIncome = parseInt($('#income').text().split(' ')[1].replace('$', ''));
        $('#income').text('Income ' + (currentIncome + amount) + '$');
        updateBalance();
    });

    // Add Expense
    $('#btnAddE').click(function() {
        var amount = parseInt($('#amount').val());
        var currentExpense = parseInt($('#expense').text().split(' ')[1].replace('$', ''));
        $('#expense').text('Expense ' + (currentExpense + amount) + '$');
        updateBalance();
    });

    // Reset
    $('#btnReset').click(function() {
        $('#amount').val('');
        $('#balance').text('Balance 0$');
        $('#income').text('Income 0$');
        $('#expense').text('Expense 0$');
    });

    // Update Balance
    function updateBalance() {
        var income = parseInt($('#income').text().split(' ')[1].replace('$', ''));
        var expense = parseInt($('#expense').text().split(' ')[1].replace('$', ''));
        var balance = income - expense;
        $('#balance').text('Balance ' + balance + '$');
    }
});