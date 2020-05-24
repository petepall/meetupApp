export default ({ store, redirect }) => {
  if (!store.getters.user) {
    redirect("/signin");
  }
};
