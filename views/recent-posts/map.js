function(doc) {
  if (doc.type == "post" && doc.show==true) {
    emit(new Date(doc.created_at), doc);
  }
};
