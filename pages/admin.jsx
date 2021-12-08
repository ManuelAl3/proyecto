import Layout from '../components/Layout';


export default function Admin() {
    return (
      <>
        <Layout>
          <form class="quizz-main m-auto" action="/save" method="POST">
            <div class="field is-horizontal box">
              <div class="field-is is-normal">
                <label name="question_id" class="label">
                  {/*question_id */}
                </label>
              </div>
              <div class="field-body block">
                <div class="field">
                  <label name="question_id" class="label">
                    {/*answer_1 */}
                  </label>
                </div>
              </div>
              <div class="field-body block">
                <div class="field">
                  <label name="question_id" class="label"></label>
                </div>
              </div>

              <div class="field-is is-normal">
                <label name="question_id" class="label">
                  {/*question_id */}
                </label>
              </div>
              <div class="field-body block">
                <div class="field">
                  <label name="question_id" class="label">
                    {/* answer_2 */}
                  </label>
                </div>
              </div>
              <div class="field-body block">
                <div class="field">
                  <label name="question_id" class="label"></label>
                </div>
              </div>

              <div class="field-is is-normal">
                <label name="question_id" class="label">
                  {/*question_id */}
                </label>
              </div>
              <div class="field-body block">
                <div class="field">
                  <label name="question_id" class="label">
                    {/* answer_3 */}
                  </label>
                </div>
              </div>
              <div class="field-body block">
                <div class="field">
                  <label name="question_id" class="label"></label>
                </div>
              </div>

              <div class="field-is is-normal">
                <label name="question_id" class="label">
                  {/*question_id */}
                </label>
              </div>
              <div class="field-body block">
                <div class="field">
                  <label name="question_id" class="label">
                    {/* answer_4 */}
                  </label>
                </div>
              </div>
              <div class="field-body block">
                <div class="field">
                  <label name="question_id" class="label"></label>
                </div>
              </div>
            </div>
          </form>
        </Layout>
      </>
    );
}