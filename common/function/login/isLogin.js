export default function ( user ) {
    return user && user.sessionStatus && user.sessionStatus != "1"
}
  