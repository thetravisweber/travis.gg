<template>
  <div class="about">
    <h2>{{ primeFactors }}</h2>

    <table id="prime-factor-table">
      <tr>
        <th>number</th>
        <th v-for="(prime, i) in primes" :key="i">
          {{ prime }}
        </th>
      </tr>
      <tr
        v-for="(factors, factored_num) in factoredTableData"
        :key="factored_num"
      >
        <td>{{ factored_num + 2 }}</td>
        <td v-for="(num_of_factor, j) in factors" :key="j">
          <p v-if="num_of_factor != 0">{{ num_of_factor }}</p>
        </td>
      </tr>
    </table>

    <div class="math-stuffs-container center"></div>
  </div>
</template>

<script>
export default {
  name: "PrimeFactors",
  data: function () {
    return {
      primes: [2, 3],
    };
  },
  computed: {
    factoredTableData: function () {
      let solution = [];
      for (let i = 2; i <= 100; i++) {
        solution[i - 2] = this.factor(i);
      }
      return solution;
    },
  },
  methods: {
    // opting for readability over speed
    factor: function (num) {
      let solutions = [];
      if (this.primes.includes(num)) {
        let index = this.primes.indexOf(num);
        solutions = Array(index + 1).fill(0);
        solutions[index] = 1;
        return solutions;
      }
      for (let i = 0; i < this.primes.length; i++) {
        let prime = this.primes[i];
        if (num % prime == 0) {
          num /= prime;
          console.log(num, prime);
          solutions = this.factor(num);
          solutions[i] += 1;
          return solutions;
        }
      }
      // if we get here, we have a new prime
      this.primes.push(num);
      return this.factor(num);
    },
  },
};
</script>

<style>
#nav {
  display:none;
}

body {
  background-color: black;
}

#prime-factor-table {
  color:blue;
  font-size: 10%;
}

p {
  color: blue;
}

</style>
