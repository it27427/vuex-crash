<script>
export default {
  name: "CounterComponent",
};
</script>

<template>
  <section class="counter pb-5">
    <div class="container mb-5">
      <h3 class="text-success">Counter</h3>

      <div class="row">
        <div class="col-lg-7 col-md-8 col-12">
          <p class="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vitae harum ullam itaque quae quasi ex deserunt similique in perspiciatis! 
            Iusto distinctio quisquam mollitia suscipit! Rerum cupiditate doloribus 
            deserunt voluptas iure cumque in, natus ipsa magnam ex veniam aperiam 
            temporibus ab recusandae. Placeat quam eaque dicta incidunt quibusdam! 
            Recusandae doloremque unde pariatur ipsa repellat suscipit illo non.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card border-0 shadow-lg">
            <div class="card-body">
              <h3 class="display-3">9</h3>
              <div class="d-flex flex-wrap gap-2">
                <button class="btn btn-success">Increment</button>
                <button class="btn btn-warning">Decrement</button>
                <button class="btn btn-danger">By Increment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
