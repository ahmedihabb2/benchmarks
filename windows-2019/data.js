window.BENCHMARK_DATA = {
  "lastUpdate": 1694820591023,
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
          "id": "7b8910a21913ba5bf0c6714ffdfcfe393d1b5a2f",
          "message": "Fix pushing",
          "timestamp": "2023-09-16T02:29:06+03:00",
          "tree_id": "7eb5fff969a347e4bdc04f2c9541b07e82b1d982",
          "url": "https://github.com/ahmedihabb2/core/commit/7b8910a21913ba5bf0c6714ffdfcfe393d1b5a2f"
        },
        "date": 1694820591018,
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