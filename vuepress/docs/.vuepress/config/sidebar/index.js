//侧边栏
module.exports = {
  '/views/': [
      '',
      // {
      //     title:'QAQ',
      //     collapsable: false,
      //     children: [
      //         'qaq/sum_ms_001',
      //         'qaq/sum_fe_001','qaq/sum_fe_002',
      //         'qaq/sum_java_001','qaq/sum_java_002',
      //         'qaq/sum_db_001',
      //         'qaq/sum_spring_001','qaq/sum_spring_002','qaq/sum_spring_003'
      //     ]
      // },
      {
          title:'规范',
          collapsable: false,
          children:[
              "specification/vue",
              "specification/ts",
              "specification/css"
          ]
      },
      // {
      //     title:'前端',
      //     collapsable: false,
      //     children:[
      //         // 
      //     ]
      // },
      {
          title:'碎碎念',
          collapsable: false,
          children:[
            "selftalking/20200307",
          ]
      }

  ]
}	