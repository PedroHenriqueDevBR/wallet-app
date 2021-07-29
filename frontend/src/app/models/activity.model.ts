class ActivityModel {
    income: Array<RegisterModel> = [];
    expense: Array<RegisterModel> = [];

    constructor(income: Array<RegisterModel> = [], expense: Array<RegisterModel> = []) {
        this.income = income;
        this.expense = expense;
    }

    getDataFromYears(): ActivityModel {
        let incomeYearList: Array<number> = this.getAllYearsFromRegisterList(this.income);
        let expenseYearList: Array<number> = this.getAllYearsFromRegisterList(this.expense);
        let incomeResult: Array<RegisterModel> = this.getTotalFromActivityYear(incomeYearList, this.income);
        let expenseResult: Array<RegisterModel> = this.getTotalFromActivityYear(expenseYearList, this.expense);
        return new ActivityModel(incomeResult, expenseResult);
    }

    getAllYearsFromRegisterList(registerList: Array<RegisterModel>): Array<number> {
        let years: Array<number> = [];
        registerList.forEach(el => {
            const year: number = el.date.getFullYear();
            if (years.find(el => el == year) == -1) {
                years.push(year);
            }
        });
        return years;
    }

    getTotalFromActivityYear(yearList: Array<number>, register: Array<RegisterModel>): Array<RegisterModel> {
        let result: Array<RegisterModel> = [];
        yearList.forEach(year => {
            let total = 0;
            register.forEach(data => {
                if (data.date.getFullYear() == year) {
                    total += data.value;
                }
            })
            result.push(new RegisterModel(total, new Date(`${year}-1-1`)));
        });
        return result;
    }

    getDataFromMonths(): ActivityModel {
        const now: Date = new Date(Date.now());
        let incomeMonthList: Array<number> = this.getAllMonthsFromCurrentYear(this.income, now.getFullYear());
        let expenseMonthList: Array<number> = this.getAllMonthsFromCurrentYear(this.expense, now.getFullYear());
        let incomeResult: Array<RegisterModel> = this.getTotalFromActivityMonth(incomeMonthList, this.income, now.getFullYear());
        let expenseResult: Array<RegisterModel> = this.getTotalFromActivityMonth(expenseMonthList, this.expense, now.getFullYear());
        return new ActivityModel(incomeResult, expenseResult);
    }

    getAllMonthsFromCurrentYear(registerList: Array<RegisterModel>, year: number): Array<number> {
        let months: Array<number> = [];
        registerList.forEach(el => {
            const year: number = el.date.getFullYear();
            if (year == year) {
                const month: number = el.date.getMonth();
                if (months.find(el => el == month) == -1) {
                    months.push(month);
                }
            }
        });
        return months;
    }

    getTotalFromActivityMonth(monthList: Array<number>, register: Array<RegisterModel>, year: number): Array<RegisterModel> {
        let result: Array<RegisterModel> = [];
        monthList.forEach(month => {
            let total = 0;
            register.forEach(data => {
                if (data.date.getFullYear() == year && data.date.getMonth() == month) {
                    total += data.value;
                }
            })
            result.push(new RegisterModel(total, new Date(`${year}-1-1`)));
        });
        return result;
    }


    // ================= Init fake data =================

    initData() {
        this.setIncomeData();
        this.setExpenseData();
    }

    setIncomeData(): void {
        this.income = [
            new RegisterModel(2000, new Date("2020-1-1")),
            new RegisterModel(2000, new Date("2020-2-1")),
            new RegisterModel(2000, new Date("2020-3-1")),
            new RegisterModel(2000, new Date("2020-4-1")),
            new RegisterModel(2000, new Date("2020-5-1")),
            new RegisterModel(2000, new Date("2020-6-1")),
            new RegisterModel(2000, new Date("2020-7-1")),
            new RegisterModel(2000, new Date("2020-8-1")),
            new RegisterModel(2000, new Date("2020-9-1")),
            new RegisterModel(2000, new Date("2020-10-1")),
            new RegisterModel(2000, new Date("2020-11-1")),
            new RegisterModel(2000, new Date("2020-12-1")),
            new RegisterModel(2000, new Date("2021-1-1")),
            new RegisterModel(2000, new Date("2021-2-1")),
            new RegisterModel(2000, new Date("2021-3-1")),
            new RegisterModel(2000, new Date("2021-4-1")),
            new RegisterModel(2000, new Date("2021-5-1")),
            new RegisterModel(2000, new Date("2021-6-1")),
            new RegisterModel(2000, new Date("2021-7-1")),
            new RegisterModel(2000, new Date("2021-8-1")),
            new RegisterModel(2000, new Date("2021-9-1")),
            new RegisterModel(2000, new Date("2021-10-1")),
            new RegisterModel(2000, new Date("2021-11-1")),
            new RegisterModel(2000, new Date("2021-12-1")),
        ];
    }

    setExpenseData(): void {
        this.expense = [
            new RegisterModel(2000, new Date("2020-1-1")),
            new RegisterModel(2000, new Date("2020-2-1")),
            new RegisterModel(2000, new Date("2020-3-1")),
            new RegisterModel(2000, new Date("2020-4-1")),
            new RegisterModel(2000, new Date("2020-5-1")),
            new RegisterModel(2000, new Date("2020-6-1")),
            new RegisterModel(2000, new Date("2020-7-1")),
            new RegisterModel(2000, new Date("2020-8-1")),
            new RegisterModel(2000, new Date("2020-9-1")),
            new RegisterModel(2000, new Date("2020-10-1")),
            new RegisterModel(2000, new Date("2020-11-1")),
            new RegisterModel(2000, new Date("2020-12-1")),
            new RegisterModel(2000, new Date("2021-1-1")),
            new RegisterModel(2000, new Date("2021-2-1")),
            new RegisterModel(2000, new Date("2021-3-1")),
            new RegisterModel(2000, new Date("2021-4-1")),
            new RegisterModel(2000, new Date("2021-5-1")),
            new RegisterModel(2000, new Date("2021-6-1")),
            new RegisterModel(2000, new Date("2021-7-1")),
            new RegisterModel(2000, new Date("2021-8-1")),
            new RegisterModel(2000, new Date("2021-9-1")),
            new RegisterModel(2000, new Date("2021-10-1")),
            new RegisterModel(2000, new Date("2021-11-1")),
            new RegisterModel(2000, new Date("2021-12-1")),
        ];
    }
}