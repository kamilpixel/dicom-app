export default ({ $dayjs }, inject) => {
  const formatDate = (date) => {
    if(!date) return;
    return $dayjs(date, 'YYYYMMDD').format('DD/MM/YYYY');
  };
  inject('formatDate', formatDate);
}