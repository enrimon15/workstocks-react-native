class PaginatedResponse {
    constructor(elements, response) {
        this.elements = elements;
        this.response = {
            pageSize: response.pageSize,
            pageNumber: response.pageNumber,
            totalPages: response.totalPages,
            totalElements: response.totalElements
        }
    }
}

export default PaginatedResponse;