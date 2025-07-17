export { };

class EmployeeData {
    constructor(public name: string, public department: string) { }
}

class PayCalculator {
    private getRegularHours() {
        console.log('給与計算用の労働時間計算ロジック');
    }

    calculatePay(employeeData: EmployeeData) {
        this.getRegularHours();
        console.log(`${employeeData.name}の給与を計算しました`);
    }
}

class HourReporter {
    private getRegularHours() {
        console.log('労働時間レポート用の労働時間計算ロジック');
    }

    reportHours(employeeData: EmployeeData) {
        this.getRegularHours();
        console.log(`${employeeData.name}の労働時間をレポートしました`);
    }
}

class EmployeeRepository {
    save(employeeData: EmployeeData) {
        console.log(`${employeeData.name}を保存しました`);
    }
}

function run () {
    const employeeData = new EmployeeData('鈴木', '開発');

    const payCalculator = new PayCalculator();
    const hourReporter = new HourReporter();
    const employeeRepository = new EmployeeRepository();

    console.log('経理部門');
    payCalculator.calculatePay(employeeData);

    console.log('人事部門');
    hourReporter.reportHours(employeeData);

    console.log('データベース管理者');
    employeeRepository.save(employeeData);
}

run();