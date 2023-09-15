window.BENCHMARK_DATA = {
  "lastUpdate": 1694819746396,
  "repoUrl": "https://github.com/ahmedihabb2/core",
  "entries": {
    "MetaCall Benchmark (ubuntu-latest)": [
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
          "id": "6c94320f8526d4421788f15a158a24d5c4589071",
          "message": "Fix pushing",
          "timestamp": "2023-09-16T02:12:51+03:00",
          "tree_id": "69edc9ae584276605d5e61a25f2a17648f0680ca",
          "url": "https://github.com/ahmedihabb2/core/commit/6c94320f8526d4421788f15a158a24d5c4589071"
        },
        "date": 1694819746392,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.7293959999969957,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7295000000000001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 61.62015199998905,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 61.0128 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 156.69900000148118,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 156.69999999999573 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 9.88854400000605,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9.380600000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 54.581205000005184,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 54.5361 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 146.18510899998682,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 146.1408 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 282.58227099999544,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 282.35949999999997 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 161.1161949999958,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 161.01213333333334 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 146.18510899998682,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 146.1408 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 114.73153237509614,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 114.63744071298578 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7121042820996308,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.7119801367742831 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 462.9940949999991,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 462.70120000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 688.104678000002,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 687.0652000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 961.7116979999878,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 957.0349 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 704.2701569999963,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 702.2671 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 688.104678000002,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 687.0652000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 249.75148431788747,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 247.51722174755858 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.3546245454752228,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35245453154157236 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 834.0299059955498,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 836.7796999999395 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 834.2848719872507,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 838.7944999998092 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 833.2011269930035,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 837.3818000002564 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 838.9243930001555,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 836.2377000003329 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 857.2459840065392,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 837.1846000001941 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 839.5372563964996,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 837.2756600001064 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 834.2848719872507,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 837.184600000194 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 10.149379554288767,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.9552185417063551 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.012089254499380286,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0011408650547732795 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1963.831263006,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1873.5234999999998 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1787.5835989975997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1797.4387000000168 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1795.1081699947622,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1806.0896999996744 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1788.6944109988292,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1799.3745999995685 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1796.150746991941,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1806.202100000112 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1826.2736379978264,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1816.5257199998741 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1795.1081699947622,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1806.0896999996742 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 76.99008471220752,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 32.10416568775981 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.04215692714954425,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.017673389005338182 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1651.1059659933096,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1666.2509000010887 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1651.4574129976722,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1666.4351000005447 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1652.3266199999398,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1667.3685000015084 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1654.139703999931,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1669.085999999897 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1649.8661610019383,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1665.142100000491 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1651.7791727985582,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1666.8565200007058 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1651.4574129976722,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1666.4351000005445 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 1.5880929518052889,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1.4761699534911232 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.0009614438648688325,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0008856010915027636 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1516.2167530030501,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 682.4845999999667 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1489.935488998384,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 680.7652999999755 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1487.9338669964,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 678.2796000000546 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 1498.028702999278,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 680.5098333333323 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 1489.935488998384,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 680.7652999999755 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 15.783076216748029,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 2.1141082430509712 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.010535897066022797,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0031066534816924884 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1475.4868609963694,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 661.179900000029 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1471.2195980020226,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 662.2926999999721 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 1466.4074230007316,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 659.099400000025 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 1471.0379606663746,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 660.857333333342 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 1471.2195980020226,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 661.1799000000289 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 4.542443469229206,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1.6209035021491482 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.0030879172330614078,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002452728327872774 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.003199999980552093,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003699999999717818 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0031999999521303835,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0033000000003724494 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0030000000208474376,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003299999999484271 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.0031333333178433045,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.003433333333191513 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0031999999521303835,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0033000000003724494 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00011547002236874896,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00023094010755429317 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.03685213498072009,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.06726410899917454 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1543.7805289933237,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1542.2267000000365 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1534.0392819920794,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1535.469100000236 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1589.9318049993667,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1542.1494000000723 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1536.657010985067,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1542.5207999997924 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1541.0083289951046,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1548.3380000002303 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1549.0833911929885,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1542.1408000000733 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1541.0083289951046,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1542.2267000000363 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 23.144437961545776,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 4.5571021904548275 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.01494073081741691,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.002955049364140168 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1401.0217999925203,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1408.9891000001771 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1439.1160869963642,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1413.1342999998058 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1463.436488997047,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1432.100600000716 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1472.1121469979153,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1425.7770999995537 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1508.993604008623,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1463.8044999992453 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1456.936025398494,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1428.7611199998996 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1463.436488997047,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1425.7770999995537 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 40.082767469170946,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 21.698071700053706 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.027511686697573222,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.015186633648076335 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}