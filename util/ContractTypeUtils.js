export default class ContractTypeUtils {
    static getContractType(contract) {
        const keys = {
            full_time: 'Full Time',
            part_time: 'Part Time',
            internship: 'Tirocinio',
            construction_base: 'Tirocinio'
        }

        return keys[contract];
    }
}