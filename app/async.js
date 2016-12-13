exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var d = $.Deferred()
    setTimeout(() => {
        d.resolve(value)
    })
    return d.promise()
  },

  manipulateRemoteData: function(url) {
    var d = $.Deferred()

    $.get(url, data => {
        d.resolve( data.people.map(p => p.name).sort() )
    })
    return d.promise()
  }
};
