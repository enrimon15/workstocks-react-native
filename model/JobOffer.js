class JobOffer {
    constructor(id, createdAt, company, title, description, contractType, minSalary, maxSalary, experience, address) {
        this.id = id;
        this.createdAt = createdAt;
        this.company = {
            name: company.name,
            website: company.website,
            email: company.email,
            photo: company.photo
        };
        this.title = title;
        this.description = description;
        this.contractType = contractType;
        this.minSalary = minSalary;
        this.maxSalary = maxSalary;
        this.experience = experience;
        this.address = {
            city: address.city,
            country: address.country
        };
    }
}

export default JobOffer;