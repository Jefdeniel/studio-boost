module.exports = {
  async currentYear() {
    const today = new Date();
    return today.getFullYear();
  },
};
