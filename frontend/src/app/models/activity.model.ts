import { RegisterModel } from "./register.model";

export class ActivityModel {
    income: Array<RegisterModel> = [];
    expense: Array<RegisterModel> = [];

    constructor(income: Array<RegisterModel> = [], expense: Array<RegisterModel> = [], initData: boolean = false) {
        this.income = income;
        this.expense = expense;
        if (initData) { this.initData(); }
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
            if (years.findIndex(el => el == year) == -1) {
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
            const yearVerifier: number = el.date.getFullYear();
            if (yearVerifier == year) {
                const month: number = el.date.getMonth();
                if (months.findIndex(el => el == month) == -1) {
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
            const date = new Date(`${year}-${month + 1}-1`);
            result.push(new RegisterModel(total, date));
        });
        return result;
    }

    getMonthName(value: number): string {
        const months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[value];
    }

    getMonthLabels(months: Array<RegisterModel>): Array<string> {
        let result: Array<string> = [];
        months.forEach(el => {
            result.push(this.getMonthName(el.date.getMonth()));
        });
        return result;
    }

    extractValueFromRegisterValue(registers: Array<RegisterModel>): Array<number> {
        let result: Array<number> = [];
        registers.forEach(el => {
            result.push(el.value);
        });
        return result;
    }

    getYearLabels(years: Array<RegisterModel>): Array<string> {
        let result: Array<string> = [];
        years.forEach(el => {
            result.push(el.date.getFullYear().toString());
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
            new RegisterModel(2000, new Date("2019-1-1")),
            new RegisterModel(1200, new Date("2019-2-1")),
            new RegisterModel(1400, new Date("2019-3-1")),
            new RegisterModel(3300, new Date("2019-4-1")),
            new RegisterModel(5100, new Date("2019-5-1")),
            new RegisterModel(2500, new Date("2019-6-1")),
            new RegisterModel(1000, new Date("2019-7-1")),
            new RegisterModel(2500, new Date("2019-8-1")),
            new RegisterModel(3400, new Date("2019-9-1")),
            new RegisterModel(1500, new Date("2019-10-1")),
            new RegisterModel(1450, new Date("2019-11-1")),
            new RegisterModel(900, new Date("2019-12-1")),
            new RegisterModel(2000, new Date("2020-1-1")),
            new RegisterModel(1200, new Date("2020-2-1")),
            new RegisterModel(1400, new Date("2020-3-1")),
            new RegisterModel(3300, new Date("2020-4-1")),
            new RegisterModel(5100, new Date("2020-5-1")),
            new RegisterModel(2500, new Date("2020-6-1")),
            new RegisterModel(1000, new Date("2020-7-1")),
            new RegisterModel(2500, new Date("2020-8-1")),
            new RegisterModel(3400, new Date("2020-9-1")),
            new RegisterModel(1500, new Date("2020-10-1")),
            new RegisterModel(1450, new Date("2020-11-1")),
            new RegisterModel(900, new Date("2020-12-1")),
            new RegisterModel(2150, new Date("2021-1-5")),
            new RegisterModel(1200, new Date("2021-2-5")),
            new RegisterModel(1400, new Date("2021-3-5")),
            new RegisterModel(3300, new Date("2021-4-5")),
            new RegisterModel(5100, new Date("2021-5-5")),
            new RegisterModel(2500, new Date("2021-6-5")),
            new RegisterModel(1000, new Date("2021-7-5")),
            new RegisterModel(2500, new Date("2021-8-5")),
            new RegisterModel(3400, new Date("2021-9-5")),
            new RegisterModel(1500, new Date("2021-10-5")),
            new RegisterModel(2450, new Date("2021-11-5")),
            new RegisterModel(900, new Date("2021-12-5")),
        ];
    }

    setExpenseData(): void {
        this.expense = [
            new RegisterModel(2150, new Date("2019-1-5")),
            new RegisterModel(1200, new Date("2019-2-5")),
            new RegisterModel(1400, new Date("2019-3-5")),
            new RegisterModel(3300, new Date("2019-4-5")),
            new RegisterModel(5100, new Date("2019-5-5")),
            new RegisterModel(2500, new Date("2019-6-5")),
            new RegisterModel(1000, new Date("2019-7-5")),
            new RegisterModel(2500, new Date("2019-8-5")),
            new RegisterModel(3400, new Date("2019-9-5")),
            new RegisterModel(1500, new Date("2019-10-5")),
            new RegisterModel(2450, new Date("2019-11-5")),
            new RegisterModel(900, new Date("2019-12-5")),
            new RegisterModel(3300, new Date("2020-1-1")),
            new RegisterModel(5100, new Date("2020-2-1")),
            new RegisterModel(2500, new Date("2020-3-1")),
            new RegisterModel(1000, new Date("2020-4-1")),
            new RegisterModel(2500, new Date("2020-5-1")),
            new RegisterModel(2400, new Date("2020-6-1")),
            new RegisterModel(1500, new Date("2020-7-1")),
            new RegisterModel(1450, new Date("2020-8-1")),
            new RegisterModel(1300, new Date("2020-9-1")),
            new RegisterModel(1100, new Date("2020-10-1")),
            new RegisterModel(2500, new Date("2020-11-1")),
            new RegisterModel(1000, new Date("2020-12-1")),
            new RegisterModel(2500, new Date("2021-1-1")),
            new RegisterModel(3400, new Date("2021-2-1")),
            new RegisterModel(1500, new Date("2021-3-1")),
            new RegisterModel(1450, new Date("2021-4-1")),
            new RegisterModel(3300, new Date("2021-5-1")),
            new RegisterModel(2500, new Date("2021-6-1")),
            new RegisterModel(2500, new Date("2021-7-1")),
            new RegisterModel(1000, new Date("2021-8-1")),
            new RegisterModel(2500, new Date("2021-9-1")),
            new RegisterModel(3400, new Date("2021-10-1")),
            new RegisterModel(1500, new Date("2021-11-1")),
            new RegisterModel(1450, new Date("2021-12-1")),
        ];
    }
}