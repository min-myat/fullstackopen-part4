const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let count = 0
  blogs.forEach((blog) => (count += blog.likes))
  return count
}

const favoriteBlog = (blogs) => {
  const max = blogs.map((blog) => blog.likes).reduce((a, b) => Math.max(a, b))
  const foundBlogs = blogs.filter((blog) => blog.likes === max)
  return foundBlogs[0]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
}
