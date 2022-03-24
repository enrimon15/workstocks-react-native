export default class ContractTypeUtil {
    static getContractType(contract) {
        const keys = {
            full_time: 'Full Time',
            part_time: 'Part Time',
            internship: 'Tirocinio',
            construction_base: 'Apprendistato'
        }

        return keys[contract];
    }
}