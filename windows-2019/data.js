window.BENCHMARK_DATA = {
  "lastUpdate": 1694822841327,
  "repoUrl": "https://github.com/ahmedihabb2/core",
  "entries": {
    "MetaCall Benchmark (windows-2019)": [
      {
        "commit": {
          "author": {
            "email": "ahmed.ihab@dstny.com",
            "name": "AhmedIhab"
          },
          "committer": {
            "email": "ahmed.ihab@dstny.com",
            "name": "AhmedIhab"
          },
          "distinct": true,
          "id": "b88a018e00505ac5e850cdca41dc1ca9dbe245d3",
          "message": "Remove unneeded steps",
          "timestamp": "2023-09-16T03:06:00+03:00",
          "tree_id": "b208b8a54b718d62bb77e87322b8ccdc809c5fff",
          "url": "https://github.com/ahmedihabb2/core/commit/b88a018e00505ac5e850cdca41dc1ca9dbe245d3"
        },
        "date": 1694822830194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1/threads:1",
            "value": 0.8567439999751514,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.6397919999999997 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1/threads:1",
            "value": 118.19833499976085,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 73.44904700000001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1/threads:1",
            "value": 160.6899986654753,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 160.7450000000038 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1/threads:1",
            "value": 23.57212700007949,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 10.485694000000004 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}