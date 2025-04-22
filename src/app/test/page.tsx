export default function Page(){
    return <div>
  <form action="https://test.payu.in/_payment" method="post">
    <input type="hidden" name="key" value="JP***g" />
    <input type="hidden" name="txnid" value="t6svtqtjRdl4ws" />
    <input type="hidden" name="productinfo" value="iPhone" />
    <input type="hidden" name="amount" value="10" />
    <input type="hidden" name="email" value="test@gmail.com" />
    <input type="hidden" name="firstname" value="Ashish" />
    <input type="hidden" name="lastname" value="Kumar" />
    <input type="hidden" name="surl" value="https://apiplayground-response.herokuapp.com/" />
    <input type="hidden" name="furl" value="https://apiplayground-response.herokuapp.com/" />
    <input type="hidden" name="phone" value="9988776655" />
    <input type="hidden" name="hash" value="eabec285da28fd0e3054d41a4d24fe9f7599c9d0b66646f7a9984303fd6124044b6206daf831e9a8bda28a6200d318293a13d6c193109b60bd4b4f8b09c90972" />
    <input type="submit" value="Submit" />
  </form>
    </div>
}