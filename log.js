const log = function(arg) {
  let status
  switch (name) {
    case 'click':
      status = true
      if (status) {
        interface({
          category: '',
          action: '',
          label: '',
          noi: true
        })
      }
      break
    case 'pv':
      status = true
      if (status) {
        interface({
          category: '',
          action: '',
          label: '',
          noi: false
        })
      }
      break
    case 'impression':
      status = true
      if (status) {
        interface({
          category: '',
          action: '',
          label: '',
          noi: false
        })
      }
      break
    default:
      console.error('log not match:' + arg)
      break
  }
  function interface (data) {
    let interaction = (!data.noi || data.noi === 'false') ? false : true
    console.log(data)
    ga('send', 'event', data.category, data.action, data.label, {
      nonInteraction: interaction
    })
  }
}

export default log