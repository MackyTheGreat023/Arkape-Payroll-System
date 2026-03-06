function computePayroll() {

    let dailyRate = parseFloat(document.getElementById("dailyRate").value) || 0;
    let daysWorked = parseFloat(document.getElementById("daysWorked").value) || 0;

    let transpo = parseFloat(document.getElementById("transpo").value) || 0;
    let transpoDays = parseFloat(document.getElementById("transpoDays").value) || 0;

    let rice = parseFloat(document.getElementById("rice").value) || 0;
    let riceDays = parseFloat(document.getElementById("riceDays").value) || 0;

    let ot = parseFloat(document.getElementById("ot").value) || 0;
    let otDays = parseFloat(document.getElementById("otDays").value) || 0;

    let grossDaily = dailyRate * daysWorked;
    let grossTranspo = transpo * transpoDays;
    let grossRice = rice * riceDays;
    let grossOT = ot * otDays;

    document.getElementById("grossDaily").value = grossDaily.toFixed(2);
    document.getElementById("grossTranspo").value = grossTranspo.toFixed(2);
    document.getElementById("grossRice").value = grossRice.toFixed(2);
    document.getElementById("grossOT").value = grossOT.toFixed(2);

    let totalGross = grossDaily + grossTranspo + grossRice + grossOT;
    document.getElementById("totalGross").value = totalGross.toFixed(2);

    let deductions = document.querySelectorAll(".deduction");
    let totalDeduction = 0;

    deductions.forEach(function(input) {
        totalDeduction += parseFloat(input.value) || 0;
    });

    document.getElementById("totalDeduction").value = totalDeduction.toFixed(2);

    let netPay = totalGross - totalDeduction;
    document.getElementById("netPay").value = netPay.toFixed(2);
}


function printPayslip() {
    window.print();
}