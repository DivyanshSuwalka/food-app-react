export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((x) =>
    x.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}