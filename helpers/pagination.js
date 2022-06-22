const getPagination = (page, size) => {
  const limit = size
  const offset = page ? (page - 1) * limit : null

  return { limit, offset }
}

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: products } = data
  const currentPage = page ? +page : 1
  const totalPages = Math.ceil(totalItems / limit)

  return { totalItems, products, totalPages, currentPage }
}

module.exports = { getPagination, getPagingData }
