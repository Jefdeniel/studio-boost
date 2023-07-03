module.exports = {
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  },

  partners () {
    return [
      {
        name: 'adidas',
        image: 'https://imgur.com/MZ1GcCk',
      },
      {
        name: 'amazon',
        image: 'https://imgur.com/6Vh3O8p',
      },
      {
        name: 'audi',
        image: 'https://imgur.com/zRIpqJJ',
      },
    ],
  },

  formatDate(dateString) {
    const months = [
      'januari',
      'februari',
      'maart',
      'april',
      'mei',
      'juni',
      'juli',
      'augustus',
      'september',
      'oktober',
      'november',
      'december',
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  },
};

