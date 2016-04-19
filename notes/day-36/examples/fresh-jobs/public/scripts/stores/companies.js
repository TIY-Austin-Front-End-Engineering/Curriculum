import CompanyCollection from '../collections/CompanyCollection';

let companies = new CompanyCollection();
companies.fetch({data: { where: {userId: window.user.id } } });

export default companies;