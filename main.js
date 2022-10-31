const getHome = (req, res) => {
    res.render('index', { title: 'Home'})
}

const getAbout = (req, res) => {
    res.render('about', { title: 'About'})
}

const getProjects = (req, res) => {
    res.render('projects', { title: 'Projects'})
}

const getContact = (req, res) => {
    res.render('contact', { title: 'Contact'})
}


module.exports = {
    getHome,
    getAbout,
    getProjects,
    getContact
}