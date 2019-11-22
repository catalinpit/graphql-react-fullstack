const links = (root, args, context) => {
    return context.prisma.user({ id: root.id }).links();
};

module.exports = {
    links
};